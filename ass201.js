//write a program to have 3 variables and output the lowest of all time


var num1=prompt("Enter the number");
    alert(num1);
    num2=prompt("Enter the number");
    alert(num2);
    num3=prompt("Enter the number");
    alert(num3);
  
  if (num1 < num2 && num1 < num3)
  { alert("Lowest of all " + num1);
    }
    else if (num2 < num1 && num2 < num3)
  { alert("Lowest of all " +num2);
    }
    else {
    alert("Lowest of all " +num3);
}
