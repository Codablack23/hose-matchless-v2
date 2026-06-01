<?php

namespace App\Http\Controllers;

use App\Models\SpeakerApplications;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class SpeakerApplicationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $applications = SpeakerApplications::latest()->get();

        return inertia('SpeakerApplications/Index', [
            'applications' => $applications,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'fullname' => 'required|string|max:255',
            'email' => 'required|email|unique:speaker_applications,email',
            'role' => 'required|string|max:255',
            'organisation' => 'required|string|max:255',
            'country_of_residence' => 'required|string|max:100',
            'years_of_experience' => 'required|integer|min:0|max:60',
            'linkedin_profile' => 'required|url|max:255',
            'area_of_interest' => 'required|string|max:255',
            'social_media_handle' => 'required|string|max:255',
            'short_bio' => 'required|string|max:1000',
        ]);

        try {
            SpeakerApplications::create($validated);

            return redirect()->back()
                ->with('success', 'Your application has been submitted successfully.');

        } catch (\Illuminate\Database\QueryException $e) {
            Log::error('Speaker application DB error: ' . $e->getMessage());

            return redirect()->back()
                ->withInput()
                ->with('error', 'A database error occurred. Please try again.');

        } catch (\Exception $e) {
            Log::error('Speaker application error: ' . $e->getMessage());

            return redirect()->back()
                ->withInput()
                ->with('error', 'Something went wrong. Please try again.');
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(SpeakerApplications $speakerApplications)
    {
        return inertia('SpeakerApplications/Show', [
            'application' => $speakerApplications,
        ]);
    }

    /**
     * Update the specified resource in storage.
     * Primarily used for updating application status.
     */
    public function update(Request $request, SpeakerApplications $speakerApplications)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,approved,rejected',
        ]);

        try {
            $speakerApplications->update($validated);

            return redirect()->back()
                ->with('success', 'Application status updated successfully.');

        } catch (\Exception $e) {
            Log::error('Speaker application update error: ' . $e->getMessage());

            return redirect()->back()
                ->with('error', 'Failed to update application status.');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SpeakerApplications $speakerApplications)
    {
        try {
            $speakerApplications->delete();

            return redirect()->back()
                ->with('success', 'Application deleted successfully.');

        } catch (\Exception $e) {
            Log::error('Speaker application delete error: ' . $e->getMessage());

            return redirect()->back()
                ->with('error', 'Failed to delete application.');
        }
    }
}