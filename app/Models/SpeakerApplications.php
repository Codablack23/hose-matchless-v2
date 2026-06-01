<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class SpeakerApplications extends Model
{

    use HasUuids;

    protected $table = 'speaker_applications';

    protected $fillable = [
        'fullname',
        'email',
        'role',
        'organisation',
        'country_of_residence',
        'years_of_experience',
        'linkedin_profile',
        'area_of_interest',
        'social_media_handle',
        'short_bio',
        'status',
    ];

    protected $attributes = [
        'status' => 'pending',
    ];
}