package co.tellmehow.kotlin.db

import org.springframework.data.repository.CrudRepository
import co.tellmehow.kotlin.gs.Employee

interface EmployeeRepository : CrudRepository<Employee, Long>{}