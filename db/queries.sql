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