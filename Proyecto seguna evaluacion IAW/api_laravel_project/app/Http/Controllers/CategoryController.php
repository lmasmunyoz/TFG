<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json($categories);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $category = Category::create($request->all());
        $data = [
            'message' => 'category created successfully',
            'category' => $category
        ];
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        $data = [
            'message' => 'Category details',
            'category' => $category
        ];
        return response()->json($data);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        $category->name = $request->name;
        $category->description = $request->description;
        $category->save();
        $data = [
            'message' => 'Category updated successfully',
            'category' => $category
        ];
        return response()->json($data);
}


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
        $data = [
            'message' => 'Category deleted successfully',
            'category' => $category
        ];
        return response()->json($data);
}

}
