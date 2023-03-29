<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     * @return void
     */
    public function run()
    {
        $category1=new Category;
        $category1->name="Salón";
        $category1->description="Muebles de salón";
        $category1->save();

        $category2=new Category;
        $category2->name="Comedor";
        $category2->description="Muebles de Comedor";
        $category2->save();

        $category3=new Category;
        $category3->name="Dormitorio";
        $category3->description="Muebles de Dormitorio";
        $category3->save();

        $category4=new Category;
        $category4->name="Home Office";
        $category4->description="Muebles de Home Office";
        $category4->save();

        $category5=new Category;
        $category5->name="Vintage";
        $category5->description="Muebles Vintage";
        $category5->save();

    }
}
