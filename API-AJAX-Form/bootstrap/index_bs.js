$(document).ready(function(){
	let employees = $('#select-employee');
	let empData;

	$.ajax({
		type: 'GET',
		url: 'http://employeesintern.azurewebsites.net/api/employees',
		success: function(data){
			empData = data;
			$.each(data, function(i, employee){
				employees.append('<option value="'+employee['id']+'">'+employee['id']+' '+employee['name']+'</option>');
			})
		}
	});

	employees.change(function(){
		let val = employees.val();
		let emp;
		for(let i=0; i<empData.length; i++)
			if(empData[i]['id']==val){
				emp = empData[i];
				break;
		}
		$("input[name='form_user']").val(emp['userName']);
		$("input[name='form_pass']").val(emp['password']),
		$("input[name='form_mobile']").val(emp['mobile']);
		$("input[name='form_phone']").val(emp['telephone']);
		$("input[name='form_name']").val(emp['name']);
		$("input[name='form_addr']").val(emp['address']);
	});

	$(".create-button").click(function(){
		if(employees.val()!='--'){
			alert("No employee should be selected.");
			return
		}
		let newEmp = {
			'UserName':$("input[name='form_user']").val(),
			'Password':$("input[name='form_pass']").val(),
			'Mobile':$("input[name='form_mobile']").val(),
			'Telephone':$("input[name='form_phone']").val(),
			'Name':$("input[name='form_name']").val(),
			'address':$("input[name='form_addr']").val(),
		}
		for(let key in newEmp){
			if(newEmp[key] ==''){
				alert('Fill the form please.');
				return;
			}
		}
		$.ajax({
			type: 'POST',
			url: 'http://employeesintern.azurewebsites.net/api/employees',
			contentType: 'application/json',
			data: JSON.stringify(newEmp),
			success: function(){
				location.reload();
			}
		});
		$("#actionButton").removeClass('create-button');
	});

	$(".update-button").click(function(){
		if(employees.val()=='--'){
			alert("Please select employee to update.");
			return
		}
		let newEmp = {
			'userName':$("input[name='form_user']").val(),
			'password':$("input[name='form_pass']").val(),
			'mobile':$("input[name='form_mobile']").val(),
			'telephone':$("input[name='form_phone']").val(),
			'name':$("input[name='form_name']").val(),
			'address':$("input[name='form_addr']").val(),
		}
		$.ajax({
			type: 'PUT',
			url: 'http://employeesintern.azurewebsites.net/api/employees/'+employees.val(),
			contentType: 'application/json',
			data: JSON.stringify(newEmp),
			success: function(){
				location.reload();	
			}
		});
		$("#actionButton").removeClass('update-button');
	});

	$(".delete-button").click(function(){
		if(employees.val()=='--'){
			alert("Please select employee to delete.");
			return
		}
		$.ajax({
			type: 'DELETE',
			url: 'http://employeesintern.azurewebsites.net/api/employees/'+employees.val(),
			success: function(){
				location.reload();	
			}
		});
		$("#actionButton").removeClass('delete-button');
	});

});
