<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class ConferenceRegistration extends Model
{

    use HasUuids;
    protected $table = 'conference_registration';
    protected $fillable = [
        'full_name',
        'email',
        'phone_number',
        'whatsapp_number',
        'primary_social_media',
        'address',
        'occupation',
        'nationality',
        'country_of_residence',
        'intended_arrival_date_to_canada',
        'intended_departure_date_from_canada',
        'has_visited_canada',
        'city',
        'passport',
        'passport_photo',
        'state',
        'zip',
        'country',
        'passport_number',
        'passport_expiry_date',
    ];
}
