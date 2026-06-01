import { useForm, usePage } from "@inertiajs/react";
import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormData {
    full_name: string;
    email: string;
    phone_number: string;
    whatsapp_number: string;
    nationality: string;
    country_of_residence: string;
    occupation: string;
    primary_social_media: string;
    passport_number: string;
    passport_expiry_date: string;
    intended_arrival_date_to_canada: string;
    intended_departure_date_from_canada: string;
    has_visited_canada: string;
    country: string;
    passport: string;
    passport_photo: string;
    disclaimer: boolean;
    package: string;
    address: string;
    city: string;
    state: string;
    zip: string;
}

interface StepProps {
    data: FormData;
    setData: (key: keyof FormData, value: string | boolean) => void;
    errors: Partial<Record<keyof FormData, string>>;
}

interface Package {
    id: string;
    name: string;
    desc: string;
    price: number;
    label: string;
    popular?: boolean;
}

type UploadStatus = "idle" | "uploading" | "done" | "failed";

// ─── Constants ────────────────────────────────────────────────────────────────

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/upload";
const CLOUDINARY_PRESET = "YOUR_UPLOAD_PRESET";

const STEPS = [
    { id: 1, label: "Personal" },
    { id: 2, label: "Travel" },
    { id: 3, label: "Package" },
    { id: 4, label: "Payment" },
];

const STEP_REQUIRED: Record<number, (keyof FormData)[]> = {
    1: [
        "full_name",
        "email",
        "phone_number",
        "nationality",
        "country_of_residence",
        "occupation",
        "primary_social_media",
    ],
    2: [
        "passport_number",
        "passport_expiry_date",
        "intended_arrival_date_to_canada",
        "intended_departure_date_from_canada",
        "has_visited_canada",
        "country",
        "passport",
        "passport_photo",
        "disclaimer",
    ],
    3: ["package"],
    4: [],
};

const PACKAGES: Package[] = [
    {
        id: "online",
        name: "Online Delegate Letter",
        desc: "Watch all 6 days from anywhere via Zoom",
        price: 100,
        label: "$100",
    },
    {
        id: "standard",
        name: "In-Person Standard Letter",
        desc: "Venue Nov 21–22 + bag + T-shirt + materials",
        price: 250,
        label: "$250",
        popular: true,
    },
    {
        id: "vip",
        name: "MVP / VIP Letter",
        desc: "Front row + VIP dinner + speaker meet & greet",
        price: 500,
        label: "$500",
    },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

function FieldError({ message }: { message?: string }) {
    if (!message) return null;
    return <p className="field-error">{message}</p>;
}

interface FileUploaderProps {
    label: string;
    accept: string;
    required?: boolean;
    onUploaded: (url: string) => void;
    error?: string;
}

function FileUploader({
    label,
    accept,
    required,
    onUploaded,
    error,
}: FileUploaderProps) {
    const [status, setStatus] = useState<UploadStatus>("idle");
    const [fileName, setFileName] = useState("");

    async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setStatus("uploading");

        try {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const res = await fetch(CLOUDINARY_URL, {
                method: "POST",
                body: formData,
            });
            if (!res.ok) throw new Error("Upload failed");

            const data = await res.json();
            onUploaded(data.secure_url as string);
            setStatus("done");
        } catch {
            setStatus("failed");
        }
    }

    return (
        <div className="field">
            <label>
                {label} {required && <span className="req">*</span>}
            </label>
            <div className={`file-upload-box ${status}`}>
                <input
                    type="file"
                    accept={accept}
                    onChange={handleChange}
                    disabled={status === "uploading"}
                    style={{ padding: "5px", fontSize: "11px" }}
                />
                <div className="file-upload-ui">
                    {status === "idle" && <span>📎 Click to upload</span>}
                    {status === "uploading" && (
                        <span className="uploading-text">⏳ Uploading…</span>
                    )}
                    {status === "done" && (
                        <span className="done-text">✅ {fileName}</span>
                    )}
                    {status === "failed" && (
                        <span className="failed-text">
                            ❌ Upload failed — try again
                        </span>
                    )}
                </div>
            </div>
            <FieldError message={error} />
        </div>
    );
}

// ─── Step 1: Personal ─────────────────────────────────────────────────────────

function StepPersonal({ data, setData, errors }: StepProps) {
    return (
        <div className="">
            <div className="form-row">
                <div className="field">
                    <label>
                        Full name (as in passport){" "}
                        <span className="req">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Adaeze Okafor"
                        value={data.full_name}
                        onChange={(e) => setData("full_name", e.target.value)}
                    />
                    <FieldError message={errors.full_name} />
                </div>
                <div className="field">
                    <label>
                        Email address <span className="req">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                    />
                    <FieldError message={errors.email} />
                </div>
            </div>

            <div className="form-row">
                <div className="field">
                    <label>
                        Phone number <span className="req">*</span>
                    </label>
                    <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={data.phone_number}
                        onChange={(e) =>
                            setData("phone_number", e.target.value)
                        }
                    />
                    <FieldError message={errors.phone_number} />
                </div>
                <div className="field">
                    <label>WhatsApp number</label>
                    <input
                        type="tel"
                        placeholder="+234 800 000 0000"
                        value={data.whatsapp_number}
                        onChange={(e) =>
                            setData("whatsapp_number", e.target.value)
                        }
                    />
                    <FieldError message={errors.whatsapp_number} />
                </div>
            </div>

            <div className="form-row">
                <div className="field">
                    <label>
                        Nationality <span className="req">*</span>
                    </label>
                    <select
                        value={data.nationality}
                        onChange={(e) => setData("nationality", e.target.value)}
                    >
                        <option value="">Select...</option>
                        {[
                            "Nigerian",
                            "Ghanaian",
                            "Kenyan",
                            "British",
                            "Canadian",
                            "American",
                            "French",
                            "German",
                            "Emirati",
                            "South African",
                            "Other",
                        ].map((n) => (
                            <option key={n}>{n}</option>
                        ))}
                    </select>
                    <FieldError message={errors.nationality} />
                </div>
                <div className="field">
                    <label>
                        Country of residence <span className="req">*</span>
                    </label>
                    <select
                        value={data.country_of_residence}
                        onChange={(e) =>
                            setData("country_of_residence", e.target.value)
                        }
                    >
                        <option value="">Select...</option>
                        {[
                            "Nigeria",
                            "Ghana",
                            "Kenya",
                            "UK",
                            "France",
                            "Germany",
                            "UAE",
                            "USA",
                            "Other",
                        ].map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                    <FieldError message={errors.country_of_residence} />
                </div>
            </div>

            <div className="form-row">
                <div className="field">
                    <label>
                        Occupation <span className="req">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. Software Engineer"
                        value={data.occupation}
                        onChange={(e) => setData("occupation", e.target.value)}
                    />
                    <FieldError message={errors.occupation} />
                </div>
                <div className="field">
                    <label>
                        Primary social media platform{" "}
                        <span className="req">*</span>
                    </label>
                    <select
                        value={data.primary_social_media}
                        onChange={(e) =>
                            setData("primary_social_media", e.target.value)
                        }
                    >
                        <option value="">Select...</option>
                        {[
                            "TikTok",
                            "Instagram",
                            "YouTube",
                            "Bigo Live",
                            "Favourited",
                            "Other",
                        ].map((s) => (
                            <option key={s}>{s}</option>
                        ))}
                    </select>
                    <FieldError message={errors.primary_social_media} />
                </div>
            </div>
        </div>
    );
}

// ─── Step 2: Travel ───────────────────────────────────────────────────────────

function StepTravel({ data, setData, errors }: StepProps) {
    return (
        <div className="">
            <div className="form-row">
                <div className="field">
                    <label>
                        Passport number <span className="req">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. A12345678"
                        value={data.passport_number}
                        onChange={(e) =>
                            setData("passport_number", e.target.value)
                        }
                    />
                    <FieldError message={errors.passport_number} />
                </div>
                <div className="field">
                    <label>
                        Passport expiry date <span className="req">*</span>
                    </label>
                    <input
                        type="date"
                        value={data.passport_expiry_date}
                        onChange={(e) =>
                            setData("passport_expiry_date", e.target.value)
                        }
                    />
                    <FieldError message={errors.passport_expiry_date} />
                </div>
            </div>

            <div className="form-row">
                <div className="field">
                    <label>
                        Intended arrival in Canada{" "}
                        <span className="req">*</span>
                    </label>
                    <input
                        type="date"
                        value={data.intended_arrival_date_to_canada}
                        onChange={(e) =>
                            setData(
                                "intended_arrival_date_to_canada",
                                e.target.value,
                            )
                        }
                    />
                    <FieldError
                        message={errors.intended_arrival_date_to_canada}
                    />
                </div>
                <div className="field">
                    <label>
                        Intended departure from Canada{" "}
                        <span className="req">*</span>
                    </label>
                    <input
                        type="date"
                        value={data.intended_departure_date_from_canada}
                        onChange={(e) =>
                            setData(
                                "intended_departure_date_from_canada",
                                e.target.value,
                            )
                        }
                    />
                    <FieldError
                        message={errors.intended_departure_date_from_canada}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="field">
                    <label>
                        Have you visited Canada before?{" "}
                        <span className="req">*</span>
                    </label>
                    <select
                        value={data.has_visited_canada}
                        onChange={(e) =>
                            setData("has_visited_canada", e.target.value)
                        }
                    >
                        <option value="">Select...</option>
                        <option value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                    <FieldError message={errors.has_visited_canada} />
                </div>
                <div className="field">
                    <label>
                        Country where you will apply for visa{" "}
                        <span className="req">*</span>
                    </label>
                    <select
                        value={data.country}
                        onChange={(e) => setData("country", e.target.value)}
                    >
                        <option value="">Select country...</option>
                        {[
                            "Nigeria",
                            "Ghana",
                            "Kenya",
                            "UK",
                            "France",
                            "Germany",
                            "UAE",
                            "USA",
                            "Other",
                        ].map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                    <FieldError message={errors.country} />
                </div>
            </div>

            <div className="form-row">
                <FileUploader
                    label="Upload passport (bio-data page)"
                    accept=".pdf,.jpg,.jpeg,.png"
                    required
                    onUploaded={(url) => setData("passport", url)}
                    error={errors.passport}
                />
                <FileUploader
                    label="Upload passport photograph"
                    accept=".jpg,.jpeg,.png"
                    required
                    onUploaded={(url) => setData("passport_photo", url)}
                    error={errors.passport_photo}
                />
            </div>

            <div className="disclaimer-box">
                <input
                    type="checkbox"
                    id="disc"
                    checked={data.disclaimer}
                    onChange={(e) => setData("disclaimer", e.target.checked)}
                />
                <label htmlFor="disc">
                    I understand that this invitation letter is for conference
                    attendance purposes only and does <strong>NOT</strong>{" "}
                    guarantee Canadian visa approval. Visa decisions are made
                    solely by the Government of Canada.
                </label>
            </div>
        </div>
    );
}

// ─── Step 3: Package ──────────────────────────────────────────────────────────

function StepPackage({ data, setData, errors }: StepProps) {
    return (
        <div className="">
            <div
                style={{
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: "10px",
                }}
            >
                Select your package
            </div>
            <div id="pkg-opts">
                {PACKAGES.map((pkg) => (
                    <div
                        key={pkg.id}
                        className={`pkg-option ${data.package === pkg.id ? "sel" : ""}`}
                        onClick={() => setData("package", pkg.id)}
                        style={{ cursor: "pointer" }}
                    >
                        <div className="pkg-option-left">
                            <div className="pkg-opt-name">
                                {pkg.name}{" "}
                                {pkg.popular && (
                                    <span
                                        style={{
                                            fontSize: "9px",
                                            background: "var(--blue)",
                                            color: "#fff",
                                            padding: "1px 5px",
                                            borderRadius: "2px",
                                            marginLeft: "4px",
                                        }}
                                    >
                                        Popular
                                    </span>
                                )}
                            </div>
                            <div className="pkg-opt-desc">{pkg.desc}</div>
                        </div>
                        <div className="pkg-option-right">{pkg.label}</div>
                    </div>
                ))}
            </div>
            <FieldError message={errors.package} />

            {data.package && (
                <div
                    style={{
                        marginTop: "8px",
                        background: "var(--green2)",
                        border: "1px solid #97C459",
                        borderRadius: "4px",
                        padding: "7px 10px",
                        fontSize: "11px",
                        color: "var(--green)",
                    }}
                >
                    ✅ You selected:{" "}
                    {PACKAGES.find((p) => p.id === data.package)?.name}
                </div>
            )}
        </div>
    );
}

// ─── Step 4: Payment ──────────────────────────────────────────────────────────

function StepPayment({
    data,
    processing,
}: {
    data: FormData;
    processing: boolean;
}) {
    const selectedPackage = PACKAGES.find((p) => p.id === data.package);

    return (
        <div className="">
            <div className="order-sum">
                <div className="order-sum-row">
                    <span>Conference</span>
                    <span>ICEC Canada 2026</span>
                </div>
                <div className="order-sum-row">
                    <span>Package</span>
                    <span>{selectedPackage?.name ?? "—"}</span>
                </div>
                <div className="order-sum-row">
                    <span>Delegate</span>
                    <span>{data.full_name || "—"}</span>
                </div>
                <div className="order-sum-total">
                    <span>Total</span>
                    <span>
                        {selectedPackage
                            ? `$${selectedPackage.price} USD`
                            : "—"}
                    </span>
                </div>
                <div
                    style={{
                        fontSize: "10px",
                        color: "var(--muted)",
                        marginTop: "5px",
                    }}
                >
                    Invitation letter PDF emailed within 2 minutes of payment
                </div>
            </div>

            <div
                style={{
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "var(--muted)",
                    marginBottom: "8px",
                }}
            >
                Choose payment method
            </div>

            <div className="pay-btns">
                <button type="submit" className="pay-btn" disabled={processing}>
                    {processing ? "Processing…" : "💳 Pay with Card (Stripe)"}
                </button>
                <button type="submit" className="pay-btn" disabled={processing}>
                    {processing ? "Processing…" : "💵 Pay with PayPal"}
                </button>
            </div>

            <div className="ssl-note">
                🔒 256-bit SSL encrypted · Your card details are never stored
            </div>
        </div>
    );
}

// ─── Confirmation screen ──────────────────────────────────────────────────────

function ConfirmScreen() {
    const [ref] = useState(
        `ICEC2026-${Math.floor(10000 + Math.random() * 90000)}`,
    );

    return (
        <div className="dark-bg" id="order">
            <div className="order-form-box max-w-[900px] mx-auto">
                <div className="form-step">
                    <div className="confirm-screen">
                        <div className="confirm-icon">✅</div>
                        <div className="confirm-title">
                            Your letter is on its way!
                        </div>
                        <div className="confirm-sub">
                            Your invitation letter is being generated now.
                            <br />
                            It will arrive in your inbox within 2 minutes.
                            <br />
                            Check spam/junk if not in inbox.
                        </div>
                        <div className="ref-number">{ref}</div>
                        <br />
                        <button className="dl-btn">↓ Download letter</button>
                        <div
                            style={{
                                marginTop: "10px",
                                fontSize: "10px",
                                color: "var(--muted)",
                            }}
                        >
                            Verify at <strong>hosematchless.com/verify</strong>{" "}
                            using your reference number
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export function Register() {
    const { flash } = usePage<any>().props;
    const [currentStep, setCurrentStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);

    const { data, setData, post, processing, errors } = useForm<FormData>({
        full_name: "",
        email: "",
        phone_number: "",
        whatsapp_number: "",
        nationality: "",
        country_of_residence: "",
        occupation: "",
        primary_social_media: "",
        passport_number: "",
        passport_expiry_date: "",
        intended_arrival_date_to_canada: "",
        intended_departure_date_from_canada: "",
        has_visited_canada: "",
        country: "",
        passport: "",
        passport_photo: "",
        disclaimer: false,
        package: "standard",
        address: "",
        city: "",
        state: "",
        zip: "",
    });

    function canProceed(): boolean {
        const required = STEP_REQUIRED[currentStep];
        return required.every((field) => {
            const val = data[field];
            if (typeof val === "boolean") return val === true;
            return val !== "" && val !== null && val !== undefined;
        });
    }

    function handleNext() {
        if (currentStep < STEPS.length) setCurrentStep((s) => s + 1);
    }

    function handleBack() {
        if (currentStep > 1) setCurrentStep((s) => s - 1);
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        post(route("registration.store"), {
            onSuccess: () => setSubmitted(true),
        });
    }

    if (submitted) return <ConfirmScreen />;

    return (
        <div className="dark-bg" id="order">
            <div className="sec-label" style={{ color: "var(--gold)" }}>
                Get Your Letter
            </div>
            <h2
                className="sec-title"
                style={{ color: "var(--white)", marginBottom: "8px" }}
            >
                Register & get your invitation letter
            </h2>
            <div className="sec-div" style={{ marginBottom: "36px" }}></div>

            <div className="space-y-10">
                <div className="order-info max-w-[500px] mx-auto text-center">
                    <h2>Your letter arrives in 2 minutes</h2>
                    <p>
                        Complete the form, make your payment, and your official
                        invitation letter PDF is automatically generated and
                        emailed to you — ready for your Canadian visa
                        application.
                    </p>
                    <div className="order-bullet text-center">
                        <span>📄</span>PDF invitation letter with unique
                        reference number
                    </div>
                    <div className="order-bullet">
                        <span>✅</span>QR code for embassy verification
                    </div>
                    <div className="order-bullet">
                        <span>🔒</span>Secure payment via Stripe & PayPal
                    </div>
                    <div className="order-bullet">
                        <span>⏳</span>Issued within 2 minutes of payment
                    </div>
                    <div className="order-bullet">
                        <span>📊</span>Verify at hosematchless.com/verify
                    </div>
                </div>

                {flash?.error && (
                    <div
                        className="max-w-[900px] mx-auto"
                        style={{
                            background: "#fee2e2",
                            border: "1px solid #fca5a5",
                            borderRadius: "4px",
                            padding: "10px 14px",
                            fontSize: "13px",
                            color: "#b91c1c",
                        }}
                    >
                        ⚠️ {flash.error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="order-form-box max-w-[900px] mx-auto">
                        <div className="step-tabs">
                            {STEPS.map((step) => (
                                <div
                                    key={step.id}
                                    className={`step-tab ${currentStep === step.id ? "active" : ""} ${currentStep > step.id ? "completed" : ""}`}
                                >
                                    {step.id} {step.label}
                                </div>
                            ))}
                        </div>

                        {currentStep === 1 && (
                            <StepPersonal
                                data={data}
                                setData={setData}
                                errors={errors}
                            />
                        )}
                        {currentStep === 2 && (
                            <StepTravel
                                data={data}
                                setData={setData}
                                errors={errors}
                            />
                        )}
                        {currentStep === 3 && (
                            <StepPackage
                                data={data}
                                setData={setData}
                                errors={errors}
                            />
                        )}
                        {currentStep === 4 && (
                            <StepPayment data={data} processing={processing} />
                        )}

                        <div className="step-nav">
                            <button
                                type="button"
                                className="nav-btn"
                                onClick={handleBack}
                                style={{
                                    visibility:
                                        currentStep === 1
                                            ? "hidden"
                                            : "visible",
                                }}
                            >
                                ← Back
                            </button>

                            <div className="step-count">
                                Step {currentStep} of {STEPS.length}
                            </div>

                            {currentStep < STEPS.length ? (
                                <button
                                    type="button"
                                    className="nav-btn primary"
                                    onClick={handleNext}
                                    // disabled={!canProceed()}
                                >
                                    Next →
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    className="nav-btn primary"
                                    disabled={processing}
                                >
                                    {processing
                                        ? "Submitting…"
                                        : "Submit & Pay →"}
                                </button>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
