use employees_db;

INSERT INTO department 
(name)
VALUES 
('Accounting'),
('Sales'),
('Marketing'),
('HR');

INSERT INTO role 
(title, salary, department_id)
VALUES
('Accountant', 90000, 1),
('Accounting Manager', 120000, 1),
('Salesperson', 85000, 2),
('Sales Manager', 100000, 2),
('Marketing Person', 95000, 3),
('Head of Marketing', 130000, 3),
('HR Person', 75000, 4),
('HR Manager', 100000, 4);

INSERT INTO employee
(first_name, last_name, role_id, manager_id)
VALUES
('Jessica', 'Day', 1, NULL),
('Nicholas', 'Miller', 2, 1),
('Winston', 'Bishop', 3, NULL),
('Allie', 'Nielson', 4, 3),
('Winston', 'Schmidt', 5, NULL),
('Cece', 'Parik', 6, 5),
('Ernie', 'Coach', 7, NULL),
('May', 'Jones', 8, 7);