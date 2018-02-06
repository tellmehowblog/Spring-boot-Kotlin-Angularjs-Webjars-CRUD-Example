package co.tellmehow.kotlin

import org.springframework.boot.SpringApplication
import org.springframework.boot.autoconfigure.EnableAutoConfiguration
import org.springframework.context.annotation.ComponentScan

@EnableAutoConfiguration
@ComponentScan
class SpringBootCrudApplication

fun main(args: Array<String>)
{
	SpringApplication.run(SpringBootCrudApplication::class.java, *args)
	println(" **** Spring Boot + Kotlin + AngularJS CRUD Example!!! *****")
}