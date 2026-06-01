<?php

namespace App\Http\Controllers;

use App\Models\ConferenceRegistration;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;

class ConferenceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:conference_registration,email',
            'phone_number' => 'required|string|max:20',
            'whatsapp_number' => 'nullable|string|max:20',
            'primary_social_media' => 'nullable|string|max:255',
            'address' => 'required|string|max:500',
            'occupation' => 'required|string|max:255',
            'nationality' => 'required|string|max:100',
            'country_of_residence' => 'required|string|max:100',
            'intended_arrival_date_to_canada' => 'required|date',
            'intended_departure_date_from_canada' => 'required|date|after:intended_arrival_date_to_canada',
            'has_visited_canada' => 'required|boolean',
            'city' => 'required|string|max:100',
            'state' => 'required|string|max:100',
            'zip' => 'required|string|max:20',
            'country' => 'required|string|max:100',
            'passport_number' => 'required|string|max:50|unique:conference_registration,passport_number',
            'passport_expiry_date' => 'required|date|after:today',
            'passport' => 'nullable|string|url',
            'passport_photo' => 'nullable|string|url',
        ]);

        try {
            ConferenceRegistration::create($validated);

            return redirect()->route('registration.success')
                ->with('success', 'Registration submitted successfully.');

        } catch (\Illuminate\Database\QueryException $e) {
            Log::error('Conference registration DB error: ' . $e->getMessage());

            return redirect()->back()
                ->withInput()
                ->with('error', 'A database error occurred. Please try again.');

        } catch (\Exception $e) {
            Log::error('Conference registration error: ' . $e->getMessage());

            return redirect()->back()
                ->withInput()
                ->with('error', 'Something went wrong. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(ConferenceRegistration $conferenceRegistration)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ConferenceRegistration $conferenceRegistration)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ConferenceRegistration $conferenceRegistration)
    {
        //
    }
}
