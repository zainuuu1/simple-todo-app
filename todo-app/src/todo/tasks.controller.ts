import { Controller, Get, Param } from '@nestjs/common';

import { TaskService } from './task.service';

@Controller('tasks')
export class TasksController {
    constructor(private readonly taskService: TaskService) {}

    @Get()
    getTasks() {
        return this.taskService.findAllTasks();
    }

    @Get(':taskId')
    getTasksById(@Param('taskId') id: number) {
        return this.taskService.findTaskById(id);
    }
}
