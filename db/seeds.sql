insert into departments (name)
values  ('Human Resources'),
        ('Legal'),
        ('Marketing'),
        ('Sales'),
        ('Development');

insert into roles (id, title, salary, dept_id)
values  (122, 'Recruiter', 75000.00, 1),
        (124, 'HR Manager', 90000.00, 1),
        (221, 'General Counsel', 125000.00, 2),
        (314, 'Marketing Analyst', 65000.00, 3),
        (345, 'Director of Marketing', 155000.00, 3),
        (403, 'Sales Consultant', 50000.00, 4),
        (432, 'Account Manager', 75000.00, 4),
        (521, 'Jr. Developer', 65000.00, 5),
        (535, 'Sr. Developer', 80000.00, 5),
        (559, 'Technical Manager', 140000.00, 5);

insert into employees (first_name, last_name, role_id, manager_id)
values  ('Papageno', 'Iacofo', 124, null),
        ('Annabelle', 'McLeod', 221, null),
        ('Claribel', 'Capper', 345, null),
        ('Amber', 'Arnone', 432, null),
        ('Etheline', 'Ing', 559, null),
        ('Rafaello', 'Curcher', 122, 1),
        ('Foster', 'Treharne', 122, 1),
        ('Phil', 'Shoulders', 314, 2),
        ('Hettie', 'Finlayson', 314, 2),
        ('Ulrich', 'Hightown', 403, 4),
        ('Giffy', 'Kleine', 403, 4),
        ('Victoir', 'Davydoch', 521, 5),
        ('Ana', 'Blakden', 521, 5),
        ('Dianna', 'Hutchinges', 535, 5),
        ('Daryle', 'Yushmanov', 535, 5);

