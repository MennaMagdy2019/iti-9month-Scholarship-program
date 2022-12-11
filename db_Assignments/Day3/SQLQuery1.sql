/**1**/
select Departments.Dnum , Departments.Dname , Employee.SSN , Employee.Fname
from Departments inner join Employee
on MGRSSN = SSN

/*2*/
select  Departments.Dname , Project.Pname
from Departments inner join Project
on Departments.Dnum = Project.Dnum

/*3*/
select Dependent.* , concat(Employee.Fname,Employee.Lname) as Ename
from Dependent inner join Employee
on ESSN = SSN

/*4*/
select Pnumber,Pname,Plocation
from Project
where City='alex' or city='Cairo'

/*5*/
select *
from Project
where Pname Like 'a%'

/*6**************/
select Employee.*
from Employee inner join Departments
on Employee.ssn=Departments.MGRSSN and  Departments.Dnum=30 and Employee.Salary between 1000 and 2000

/*7****************/
select concat(Employee.Fname,Employee.Lname) as Ename
from Employee  inner join Works_for
on Essn = SSN and Hours>=10  and Dno=10
inner join Project
on Pname='Employee.Fname'

/*8******/
select emp.*
from Employee emp inner join Employee leader
on leader.Superssn= emp.SSN and leader.Fname= 'Kamel'and leader.Lname='Mohamed'

/*9*/
select Employee.Fname , Project.Pname
from Employee inner join Works_for
on Employee.SSN = Works_for.ESSn
inner join Project
on Works_for.Pno = Project.Pnumber
order by Project.Pname

/*10*/
select Project.Pname , Departments.Dname , Employee.Lname , Employee.Address , Employee.Bdate
from Departments inner join Project
on Project.Pnumber=Departments.Dnum and  City='Cairo'/********/
inner join Employee
on Departments.MGRSSN = Employee.SSN

/*11***  manager  departments*/
select manager.*
from Employee manager inner join Departments 
on manager.ssn= Departments.MGRSSN

/*12*/
select Employee.* , Dependent.*
from Employee left outer join Dependent
on Employee.ssn = Dependent.Essn

/*13*/
INSERT INTO Employee (SSN,Superssn,Salary,Dno)
values (102672,112233,3000,30) 

/*14*/
INSERT INTO Employee (SSN,Dno)
values (102660,30) 

update Employee
set Salary += Salary*.2
where ssn=102672