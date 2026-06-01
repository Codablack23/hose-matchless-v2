<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('speaker_applications', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string('fullname');
            $table->enum("status", ["pending", "approved", "rejected"])->default("pending");
            $table->string('email')->unique();
            $table->string('role');
            $table->string('organisation');
            $table->string('phone_number');
            $table->string('whatsapp_number')->nullable();
            $table->string('passport_number');
            $table->string("nationality");
            $table->string('country_of_residence');
            $table->integer('years_of_experience');
            $table->string('linkedin_profile')->nullable();
            $table->string('area_of_interest');
            $table->string('social_media_handle')->nullable();
            $table->boolean('has_spoken_at_conference')->default(false);
            $table->string('name_of_last_spoken_conference')->nullable();
            $table->string('assigned_topic')->nullable();
            $table->string('additional_information')->nullable();
            $table->string('short_bio');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('speaker_applications');
    }
};
