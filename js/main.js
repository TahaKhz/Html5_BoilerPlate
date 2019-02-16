const Stopwatch = {
    timespend: 0,
    limit:0,
    initCookie:'',
    tri:0,
    start: function() {               
        setInterval(Stopwatch.increase, 1000);        
    },
    increase: function () {        
        if (Stopwatch.timespend < 100)
        Stopwatch.timespend++; 
        if(Stopwatch.timespend>Stopwatch.limit){
            Stopwatch.tri++;
            if(Stopwatch.tri==1)  
                init(Stopwatch.initCookie,Stopwatch.tri)
        }                      
    }
}
function DateStringBuilder(date) {
    date.string = date.day +
        date.dateseperator +
        date.month +
        date.dateseperator +
        date.year +
        date.datentimeseperator +
        date.hour +
        date.timeseperator +
        date.minute;
    return date;
}
function TimeNow(dsep = '/', dtsep = ' ', tsep = ':') {
    let d = new Date();
    var now = {
        day: d.getDate(),
        month: parseInt(d.getMonth() + 1),
        year: d.getFullYear(),
        hour: d.getHours(),
        minute: d.getMinutes(),
        string: '',
        dateseperator: dsep,
        datentimeseperator: dtsep,
        timeseperator: tsep
    };
    DateStringBuilder(now)
    return now;
}
function GetCookie(name) {
    var cookies = GetCookies();
    return cookies.values[cookies.names.indexOf(name)];
}
function GetCookies() {
    let cookies = {
        unprocessed: document.cookie.split(';'),
        names: [],
        values: []
    }
    for (var key in cookies.unprocessed) {
        var temps = cookies.unprocessed[key].split('=');
        cookies.names.push(temps[0]);
        cookies.values.push(temps[1]);
    }
    return cookies;
}
function GetEach(classname) {
    let idList = [];
    $("." + classname).each((index, element) => {
        idList.push($(element).attr('id'));
    });
    return idList;
}
function CookieGenerator(initCookie) {
    let generate = {        
        pageurl:window.location.href,
        name:initCookie.cookiename,
        cookievalue:GetCookie(initCookie.usercookiename),
        date:TimeNow().string,
        timespend:Stopwatch.timespend,
        browseddata:GetEach(initCookie.htmlbrowsed)                
    };            
    if (Stopwatch.timespend > initCookie.spendtimelimit)
        document.cookie=generate;        
    $('#cookie p').text(JSON.stringify(generate, null, 2));   
    console.log(generate);  
    value= generate;
}
function init(initCookie,Doitnow=0){       
    Stopwatch.limit = initCookie.spendtimelimit;
    Stopwatch.initCookie = initCookie;
    if(Doitnow==1)
        CookieGenerator(initCookie);
}
$(function () {
    let initCookie = {
        // dateseperator: '-',
        // timeseperator: '_',
        // datetimesepartor: '****',
        cookiename: 'browsing_data',
        usercookiename: 'User_name',
        // cookiejoinchar: '~',
        htmlbrowsed: 'item',
        spendtimelimit: 20,
        // cookiestyle: 1,
        value:''
    };        
    setTimeout(Stopwatch.start(), 5000);
    init(initCookie);
});