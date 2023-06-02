<?php

namespace App\Http\Controllers;

use App\Models\Furniture;
use Illuminate\Http\Request;

class FurnitureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $furnitures = Furniture::with("category")->get();
        return response()->json($furnitures);
    }


    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function searchProductsByCategory(Request $request)
    {
        if ($request->category_id){
            $search = Furniture::where('category_id', $request->category_id)->get();
            return response()->json($search);
        }else{
            $data=[
                'message'=>'Empty search'
            ];
            return response()->json($data);
        }
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $furniture = Furniture::create($request->all());
        $data = [
            'message' => ' Furniture created successfully',
            'furniture' => $furniture
        ];
        return response()->json($data);
    }


    /**
     * Display the specified resource.
     */
    public function show(Furniture $furniture)
    {
        $data = [
            'message' => 'Furniture details',
            'furniture' => $furniture
        ];
        return response()->json($data);
    }


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Furniture $furniture)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Furniture $furniture)
    {
        $furniture->name = $request->name;
        $furniture->description = $request->description;
        $furniture->price = $request->price;
        $furniture->img = $request->img;
        $furniture->categoy_id = $request->categoy_id;
        $furniture->save();
        $data = [
            'message' => 'updated successfully',
            'furniture' => $furniture
        ];
        return response()->json($data);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Furniture $furniture)
    {
        $furniture->delete();
        $data = [
            'message' => 'furniture deleted successfully',
            'furniture' => $furniture
        ];
        return response()->json($data);
    }

}
