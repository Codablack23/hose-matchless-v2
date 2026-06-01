<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\UserStatus;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('conference_registration', function (Blueprint $table) {
            $table->uuid("id")->primary();
            $table->string('full_name');
            $table->enum("status", [
                "pending",
                "approved",
                "rejected",
            ])->default("pending");
            $table->string('email');
            $table->string('phone_number');
            $table->string('whatsapp_number')->nullable();
            $table->enum("primary_social_media", ["Facebook", "Instagram", "Twitter", "Tiktok", "Youtube", "Linkedin", "Other"]);
            $table->string('address');
            $table->string('occupation');
            $table->string('nationality');
            $table->string('country_of_residence');
            $table->dateTime('intended_arrival_date_to_canada');
            $table->dateTime('intended_departure_date_from_canada');
            $table->boolean(("has_visited_canada"));
            $table->string('city');
            $table->string('passport');
            $table->string('passport_photo');
            $table->string('state');
            $table->string('zip');
            $table->string('country');
            $table->string('passport_number');
            $table->string('passport_expiry_date');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('conference_registration');
    }
};
