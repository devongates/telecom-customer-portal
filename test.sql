-- insert test data
insert into user (user_id,email,password) values (1,'todd@emert.com','1234');
insert into user (user_id,email,password) values (2,'devon@gates.com','1234');
insert into plan (plan_id,base_cost,cost_per_line,max_num_lines,plan_name) values (1,60,20,6,'Unlimited');
insert into plan (plan_id,base_cost,cost_per_line,max_num_lines,plan_name) values (2,35,25,4,'Super');
insert into plan (plan_id,base_cost,cost_per_line,max_num_lines,plan_name) values (3,50,0 ,1,'Base');
insert into userplan (userplan_id,userplan_plan_id,userplan_user_id) values (1,1,1);
insert into userplan (userplan_id,userplan_plan_id,userplan_user_id) values (2,3,1);
insert into userplan (userplan_id,userplan_plan_id,userplan_user_id) values (3,2,2);
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (1,1,'Todd''s Phone',		'4949679050','Galaxy S8');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (2,1,'Jeff''s Phone',		'4949679045','iPhone 11');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (3,1,'Greg''s Phone',		'4949679037','Galaxy A32');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (4,1,'Diane''s Phone',		'4949678713','Galaxy S20');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (5,1,'Heather''s Phone',	'4949677755','iPhone 12 Pro');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (6,2,'Dad''s Phone',		'4949679203','Galaxy S8');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (7,3,'Devon''s Phone',		'1942048646','Motorola razr');
insert into phone (phone_id,phone_userplan_id,phone_name,phone_number,phone_type) values (8,3,'Work Phone',			'1942046755','iPhone 11');
