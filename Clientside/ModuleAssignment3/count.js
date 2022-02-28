count = 0;
sub=0;

function incCount() 
{
  count += 1;
  return count;
}

function subtract()
{
  sub-=1;
  return sub
}


function countIt() 
{
  $("#counter").html(incCount());
}

function subIt(){
  $("#subtract").html(subtract());
}

