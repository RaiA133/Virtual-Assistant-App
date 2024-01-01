<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FeedbackSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('feedback')->insert([
            'name' => 'David Erik',
            'feedback_message' => 'Saya ingin berbagi kebahagiaan saya menggunakan virtual assistant ini. Sangat responsif dan fungsional, memudahkan tugas sehari-hari saya. Terima kasih atas pengalaman yang memuaskan!',
        ]);
        DB::table('feedback')->insert([
            'name' => 'Raie A',
            'feedback_message' => 'Virtual assistant Anda bagus, tetapi mungkin bisa lebih baik dengan pemahaman konteks yang lebih baik. Juga, penambahan opsi bahasa akan menjadi nilai tambah besar. Terima kasih!',
        ]);
        DB::table('feedback')->insert([
            'name' => 'John',
            'feedback_message' => 'Secara keseluruhan, virtual assistant Anda telah membantu saya banyak. Responsif, fungsional, tetapi mungkin ada ruang untuk peningkatan pemahaman konteks. Semoga melihat pembaruan yang lebih menarik!',
        ]);
    }
}
