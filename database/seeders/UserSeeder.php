<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            'name' => 'David Erik',
            'email' => 'daviderik804@gmail.com',
            'password' => Hash::make('123123123'),
            'role' => 1,
        ]);
        DB::table('users')->insert([
            'name' => 'Raie A',
            'email' => 'rai010303@gmail.com',
            'password' => Hash::make('321321321'),
            'role' => 2,
        ]);
    }
}
