let  btn=document.getElementById("btn");
btn.addEventListener('click',function()
{
    let amount=document.getElementById('amount').value;
    let percentage=document.getElementById('percentage').value;
    let tAmount=document.getElementById("tAmount").value=amount/percentage;
    document.getElementById("t_bill").value=parseFloat(amount)+parseFloat(tAmount);

})