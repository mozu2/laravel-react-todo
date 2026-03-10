<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;
use Inertia\Inertia; 

class TaskController extends Controller
{
    public function index(){
        return Inertia::render('Todo/Index',[
            'todos' => Task::latest()->get()
        ]);
    }

    public function store(Request $request){
        $validated = $request->validate([
            'title' =>'required',
            'due_date' =>'nullable|date',
            'description' => 'nullable',
        ]);

        Task::create($validated);

        return redirect()->back();
    }
}
