
import img1 from "../../../assets/pp.jpg"
import img2 from "../../../assets/land.jpg"
const FAQ = () => {
    const faqData = [
        {
            category: "General Questions",
            questions: [
                {
                    q: "How do I create an account?",
                    a: "Click Sign Up and register using your email or Google account."
                },
                {
                    q: "Is Parking Khujo free to use?",
                    a: "Yes. Searching for parking is completely free."
                },
                {
                    q: "Can I use the app without logging in?",
                    a: "You can browse parking locations, but booking requires an account."
                }
            ]
        },

        {
            category: "Booking & Parking Usage",
            questions: [
                {
                    q: "How do I book a parking spot?",
                    a: "Search nearby parking, choose a slot, and click Book."
                },
                {
                    q: "Can I cancel my booking?",
                    a: "Yes, before the booking starts."
                },
                {
                    q: "Can I extend my parking duration?",
                    a: "Yes, if the parking spot is still available."
                }
            ]
        },

        {
            category: "Payment & Pricing",
            questions: [
                {
                    q: "Which payment methods are supported?",
                    a: "bKash, Nagad, Rocket, Visa, Mastercard and more."
                },
                {
                    q: "Will I get a refund?",
                    a: "Refunds are processed according to the cancellation policy."
                },
                {
                    q: "Are there hidden fees?",
                    a: "No. You'll always see the final price before payment."
                }
            ]
        },

        {
            category: "Parking Partners",
            questions: [
                {
                    q: "How can I become a parking partner?",
                    a: "Click 'Become a Parking Partner' and submit your parking details."
                },
                {
                    q: "When will I receive payments?",
                    a: "Payments are transferred weekly."
                },
                {
                    q: "Can I manage my parking availability?",
                    a: "Yes. You can update availability anytime from your dashboard."
                }
            ]
        }
    ];

    const partnerFaqs = [
  {
    category: "Partner Registration",
    questions: [
      {
        q: "Who can become a parking partner?",
        a:
          "Anyone who owns or manages a parking space, garage, or commercial parking facility can apply to become a Parking Khujo partner.",
      },
      {
        q: "How do I register my parking space?",
        a:
          "Click 'Become a Parking Partner', complete the registration form, upload the required documents, and submit your application for review.",
      },
      {
        q: "How long does approval take?",
        a:
          "Most applications are reviewed within 24–48 hours after all required information is submitted.",
      },
    ],
  },
  {
    category: "Managing Parking Spaces",
    questions: [
      {
        q: "Can I update parking availability anytime?",
        a:
          "Yes. You can update available spaces, operating hours, and pricing anytime from your partner dashboard.",
      },
      {
        q: "Can I temporarily close my parking lot?",
        a:
          "Absolutely. You can mark your parking lot as unavailable whenever needed and reopen it later.",
      },
      {
        q: "Can I manage multiple parking locations?",
        a:
          "Yes. One partner account can manage multiple parking facilities from a single dashboard.",
      },
    ],
  },
  {
    category: "Payments & Earnings",
    questions: [
      {
        q: "When do I receive my earnings?",
        a:
          "Partner earnings are transferred weekly to your registered bank account or mobile financial service.",
      },
      {
        q: "Does Parking Khujo charge a commission?",
        a:
          "Yes. A small service fee is deducted from each completed booking to maintain the platform and payment services.",
      },
      {
        q: "Can I view my earnings history?",
        a:
          "Yes. Your dashboard includes detailed reports of bookings, earnings, payouts, and transaction history.",
      },
    ],
  },
  {
    category: "Support & Security",
    questions: [
      {
        q: "What happens if a customer doesn't arrive?",
        a:
          "If the customer doesn't arrive within the reservation window, the booking will follow your cancellation policy.",
      },
      {
        q: "How can I contact partner support?",
        a:
          "Our dedicated support team is available via live chat, email, and phone during business hours.",
      },
      {
        q: "Is my business information secure?",
        a:
          "Yes. We use industry-standard encryption and secure payment systems to protect your business and customer data.",
      },
    ],
  },
];
    return (
        <div>
            <div className="text-center py-20">
                <h2 className="text-5xl font-bold text-black">FAQ</h2>
                <p className="mt-4">Frequently Asked Questions</p>
            </div>

            <div className="flex max-w-7xl mx-auto gap-5 justify-between items-center">
                <div className="flex-1 space-y-4">

                    {faqData.map((section, index) => (

                        <div
                            key={index}
                            className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-slate-200"
                        >

                            <input
                                type="radio"
                                name="faq-category"
                                defaultChecked={index === 0}
                            />

                            <div className="collapse-title text-xl font-bold text-[#0B2545]">
                                {section.category}
                            </div>

                            <div className="collapse-content">

                                <div className="space-y-3">

                                    {section.questions.map((faq, i) => (

                                        <div
                                            key={i}
                                            className="border border-slate-200 rounded-xl p-4"
                                        >
                                            <h4 className="font-semibold text-[#0B2545]">
                                                {faq.q}
                                            </h4>

                                            <p className="text-slate-500 mt-2">
                                                {faq.a}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
                <div className="hidden md:block md:flex-1">
                    <img className="w-full h-full object-cover rounded-2xl" src={img1} alt="" />
                </div>

            </div>



            {/* next */}
         <h2 className="text-5xl text-center py-15 font-bold text-black">Partner FAQ</h2>

             <div className="flex max-w-7xl mx-auto gap-5 justify-between items-center">
             
               <div className="hidden md:block md:flex-1">
                    <img className="rounded-2xl w-full" src={img2} alt="" />
                </div>

                <div className="flex-1 space-y-4">

                    {partnerFaqs.map((section, index) => (

                        <div
                            key={index}
                            className="collapse collapse-plus bg-white rounded-2xl shadow-md border border-slate-200"
                        >

                            <input
                                type="radio"
                                name="faq-category"
                                defaultChecked={index === 0}
                            />

                            <div className="collapse-title text-xl font-bold text-[#0B2545]">
                                {section.category}
                            </div>

                            <div className="collapse-content">

                                <div className="space-y-3">

                                    {section.questions.map((faq, i) => (

                                        <div
                                            key={i}
                                            className="border border-slate-200 rounded-xl p-4"
                                        >
                                            <h4 className="font-semibold text-[#0B2545]">
                                                {faq.q}
                                            </h4>

                                            <p className="text-slate-500 mt-2">
                                                {faq.a}
                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>
              

            </div>


        </div>
    );
};

export default FAQ;