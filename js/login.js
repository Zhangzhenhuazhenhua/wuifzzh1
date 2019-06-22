$(function () {
    let submitBtn=$(':submit');
    let userBtn=$(':text');
    let passBtn=$(':password');
    // submitBtn.on('click',function () {
    //     let user=userBtn.val() , password=passBtn.val();
    //     let xml=new XMLHttpRequest();
    //     xml.open('get','./php/login.php?user='+user+'&password'+password);
    //     xml.send(null);
    //     xml.onload=function () {
    //         console.log(xml.response);
    //     }
    // })
    submitBtn.on('click',function (e) {
        e.preventDefault();
        let qs=$('form').serialize();
        let xml=new XMLHttpRequest();
        xml.open('POST','./php/login.php');
        xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xml.responseType='json';
        xml.send(qs);
        xml.onload=function () {
            let {code,msg}=xml.response;
            if (code==1){
                alert(msg);
            }else{
                alert(msg);
            }
        }
    })

})