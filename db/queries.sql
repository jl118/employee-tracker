select *
from departments
join roles on departments.id = roles.dept_id
join employees on employees.role_id = roles.id;

select 
    roles.id, 
    roles.title, 
    roles.salary, 
    departments.name
    from roles 
    join departments 
    on departments.id = roles.dept_id;

select e.id, concat(e.first_name, " ", e.last_name) as "Name", roles.title, departments.name, roles.salary, concat(m.first_name, " ", m.last_name) as "Manager Name"
from employees e
left join employees m on e.manager_id = m.id
join roles on e.roles_id = roles.id
join departments on departments.id = roles.dept_id
order by e.id asc;

insert into employees (first_name, last_name, role_id, manager_id) value ("${response.first_name}", "${response.last_name}", ${response.role}, ${response.manager});
