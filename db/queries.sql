select *
from departments
join roles on departments.id = roles.dept_id
join employees on employees.role_id = roles.id;