import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskModel } from './task.model';

@Injectable()
export class TaskService {
    _tasks: TaskModel[] = [
        {id: 1, description: 'Feed the cat'},
        {id: 2, description: 'Clean the windows'},
        {id: 3, description: 'Wash the car'}
    ]

    findAllTasks(): TaskModel[] {
        return this._tasks;
    }

    findTaskById(id: number): TaskModel {
        let taskFound = this._tasks.find((task) => task.id == id)
        if (!taskFound) {
            throw new NotFoundException(`Task with id ${id} not found !`)
        }
        return taskFound
    }
}
