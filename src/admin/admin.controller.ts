import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  matricula(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.matricula(createAdminDto.emailAluno, createAdminDto.nomeCurso);
  }
}
