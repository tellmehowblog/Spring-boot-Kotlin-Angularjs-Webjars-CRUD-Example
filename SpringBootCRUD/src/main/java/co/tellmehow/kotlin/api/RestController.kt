package co.tellmehow.kotlin.api

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PutMapping
import org.springframework.web.bind.annotation.DeleteMapping
import co.tellmehow.kotlin.gs.Employee
import co.tellmehow.kotlin.db.EmployeeRepository




@RestController
@RequestMapping("/employee")
class RestController(val employeeRepository : EmployeeRepository) {
	
	
	
	@PostMapping
	fun saveEmployee(@RequestBody employee: Employee): Employee
	{
		return employeeRepository.save(employee)
	}

	@GetMapping("/{id}")
	fun getEmployee(@PathVariable id: Long): Employee
	{
		return employeeRepository.findOne(id)
	}

	@GetMapping
	fun getAllEmployees(): Iterable<Employee>
	{
		return employeeRepository.findAll()
	}

	@PutMapping
	fun updateEmployee(@RequestBody employee: Employee)
	{
		employeeRepository.save(employee)
	}

	@DeleteMapping("/{id}")
	fun deleteEmployee(@PathVariable id: Long)
	{
		employeeRepository.delete(id)
	}
	
	
}