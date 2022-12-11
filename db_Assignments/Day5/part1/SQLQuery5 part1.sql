/**:part1 Use  Use ITI DB ***/
/***1 Retrieve number of students who have a value in their age.**/
select  St_Fname,St_Lname
from Student
where St_Age IS NOT Null

/*2 Get all instructors Names without repetition*/
select distinct Ins_Name
from Instructor

/*3 Display student with the following Format (use isNull function)*/
select St_Id as 'Student ID' , concat(St_Fname,St_Lname) as 'Student Full Name',Dept_Name as 'Department name'
from Student,Department
where Student.Dept_Id=Department.Dept_Id and St_Id is Null

/*4 Display instructor Name and Department Name 
Note: display all the instructors if they are attached to a department or not
*/
select Ins_Name,Dept_Name
from Instructor left Outer join Department
on Instructor.Dept_Id = Department.Dept_Id

/*5  Display student full name and the name of the course he is taking
For only courses which have a grade 
*/
select concat(St_Fname,St_Lname) as 'Full Name' , Crs_Name
from student inner join Stud_Course 
on Student.St_Id= Stud_Course.St_Id and Grade is NOT Null
inner join Course
on Stud_Course.Crs_Id = Course.Crs_Id

/*6 Display number of courses for each topic name*/
select count(*)
from Course
group by Top_Id

/**7  Display max and min salary for instructors **/
select min(salary),max(salary)
from Instructor

/*8  Display instructors who have salaries less than the average salary of all instructors.*/
select *
from Instructor
where Salary < (select avg(salary) from Instructor)

/*9 Display the Department name that contains the instructor who receives the minimum salary.
*/
select Dept_Name
from Department,Instructor
where Department.Dept_Id=Instructor.Dept_Id and salary= (select min(salary) from Instructor)

/*10 Select max two salaries in instructor table. */
select top(2) Salary
from Instructor

/*11 Select instructor name and his salary but if there is no salary display instructor bonus keyword. “use coalesce Function”**********/
select  Ins_Name ,COALESCE(cast(salary As varchar),'bonus') 
from Instructor

/*12 Select Average Salary for instructors */
select avg(salary)
from Instructor

/*13 select Student first name and the data of his supervisor */
select Student.St_Fname , Instructor.*
from Student inner join Department
on Student.Dept_Id = Department.Dept_Id
inner join Instructor
on Department.Dept_Id = Instructor.Dept_Id

/*14  Write a query to select the highest two salaries in Each Department for instructors who have salaries. “using one of Ranking Functions” */
select *
from (select *,Row_number() over(Partition by dept_id order by salary desc) as RN
	  from Instructor) as X
where RN<=2

/*15  Write a query to select a random  student from each department.  “using one of Ranking Functions” */
select *
from (select *,Row_number() over(Partition by dept_id order by newID()) as RN
	  from student) as X
where RN=1

