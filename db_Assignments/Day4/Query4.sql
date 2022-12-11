/* use Company_SD */
/**1  
Display (Using Union Function)
 a-The name and the gender of the dependence that's gender is Female and depending on Female Employee.
 b-And the male dependence that depends on Male Employee.
**/
/**a*/
select Dependent_name ,Dependent.Sex
from Dependent , Employee
where Dependent.Sex = 'F' and Employee.Sex='f'
union all
select Dependent_name , Dependent.Sex
from Dependent , Employee
where Dependent.Sex = 'M' and Employee.Sex='M'

/**2 For each project, list the project name and the total hours per week (for all employees) spent on that project. **/
select Pname , (select sum(Hours) from Works_for as Total_Hours)
from Project
Group by Pname

/*3 Display the data of the department which has the smallest employee ID over all employees' ID.**/
select * from Departments where 
Dnum =( 
select Dno from Employee
where Bdate = (select max(Bdate) from Employee )
)

/****4 For each department, retrieve the department name and the maximum, minimum and average salary of its employees. **/

select Dname ,max(salary) , min(Salary) , avg(salary) 
from Employee,Departments
where Departments.Dnum = Employee.Dno
group by Dname

/*5 List the full name of all managers who have no dependents.*/
select Employee.Fname,Employee.Lname
from Employee inner join Departments 
on Employee.SSN = Departments.MGRSSN and MGRSSN not in
(select ESSN from Dependent)

/**6 For each department-- if its average salary is less than the average salary of all employees-- display its number, name and number of its employees.**/
select Dno , count(*)
from  Employee
group by Dno 
having avg(Salary) < ( select avg(salary)
from Employee)

select Dnum, Dname , (select count(*)from Employee)
from Departments,employee
where Departments.Dnum = Employee.Dno
group by Dnum, Dname 
having avg(Employee.Salary) < (select avg(salary) from Employee)

/**7 Retrieve a list of employees names and the projects names they are working on ordered by department number and within each department, ordered alphabetically by last name, first name.****/
select Fname,Lname ,Pname , Dno
from Employee inner join Departments
on ssn = MGRSSN
inner join Project
on Departments.Dnum=Project.Dnum 
order by Dno , Fname,Lname

/*
select Fname,Lname ,Pname , Dno
from Employee inner join Departments
on ssn = MGRSSN
inner join Project
on Departments.Dnum=Project.Dnum and Project.Dnum in ( select Dnum from Project group by Dnum)
order by Dno , Fname,Lname
*/

/*8  Retrieve a list of employees names and the projects names they are working on ordered by department number and within each department, ordered alphabetically by last name, first name.*/
select (select max(salary) from Employee) as First_MaXSalary , max(salary) as second_MaXSalary
from Employee
where Salary not in (select max(salary) from Employee)

/**9  Try to get the max 2 salaries using subquery**/
select CONCAT(Fname,Lname) as Fullname
from Employee , Dependent
where SSN=EssN and CHARINDEX(Fname,Dependent_name)>0

/**/

/*10****Display the employee number and name if at least one of them have dependents (use exists keyword) self-study.******/
select Fname,Lname
from Employee
where exists (select count(*) from Dependent where ssn = essn)

/*11  In the department table insert new department called "DEPT IT" , with id 100, employee with SSN = 112233 as a manager for this department. The start date for this manager is '1-11-2006'*/
Insert into Departments
values ('DEPT IT',100,112233,'1-11-2006')

/*12   Do what is required if you know that : Mrs.Noha Mohamed(SSN=968574)  moved to be the manager of the new department (id = 100), and they give you(your SSN =102672) her position (Dept. 20 manager) */

/*a   First try to update her record in the department table*/
update Departments
set  mgrssn= (select SSn from Employee where ssn =968574)
where Dnum = 100

/*b   Update your record to be department 20 manager.*/
update employee
set Fname='menna' , Lname='magdy' ,Dno=20
where ssn =102672

/*c Update the data of employee number=102660 to be in your teamwork (he will be supervised by you) (your SSN =102672)*/
update employee
set Superssn = (select ssn from Employee where ssn =102672)
where ssn = 102660

/*13**
Unfortunately the company ended the contract with Mr. Kamel Mohamed (SSN=223344) so try to delete his data from your database in case you know that you will be temporarily in his position.
Hint: (Check if Mr. Kamel has dependents, works as a department manager, supervises any employees or works in any projects and handle these cases).
*****/
delete from Employee
where ssn =(select MGRSSN from Departments 
where MGRSSN=223344 ) and ssn =
(select essn from  Dependent
where essn =223344)

 /*or*/

delete from Employee
where ssn =223344
delete from Employee 
where superssn=(select ssn from Employee where ssn =223344)
delete from Departments 
where MGRSSN=(select ssn from Employee where ssn =223344)
delete from Dependent
where essn =(select ssn from Employee where ssn =223344)


/*14 Try to update all salaries of employees who work in Project ‘Al Rabwah’ by 30%
**/
update Employee
set Salary += Salary*.3
where Dno in
(select Dnum from Departments where Dname='Al Rabwah')