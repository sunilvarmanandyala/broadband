import React, { useState } from 'react';

function PlanModal({ plan, billingCycle, onClose, onConfirm }) {
  if (!plan) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-95 opacity-0 animate-modalIn">
        <h3 className="text-2xl font-bold mb-4">Confirm Plan Selection</h3>
        <p className="mb-2">Plan: <strong>{plan.name}</strong></p>
        <p className="mb-2">Price: <strong>${plan.price} / {billingCycle}</strong></p>
        <ul className="text-sm mb-4 list-disc list-inside text-gray-600 dark:text-gray-300">
          {plan.features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Confirm & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PlanRates() {
  const [selectedId, setSelectedId] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [showModal, setShowModal] = useState(false);

  const plansData = [
    {
      id: 1,
      name: 'Starter',
      price: billingCycle === 'monthly' ? 49 : 490,
      features: ['Up to 100 Mbps', 'Unlimited Data', 'No Contracts']
    },
    {
      id: 2,
      name: 'Plus',
      price: billingCycle === 'monthly' ? 69 : 690,
      features: ['Up to 300 Mbps', 'Unlimited Data', 'Whole Home Wi-Fi']
    },
    {
      id: 3,
      name: 'Ultra',
      price: billingCycle === 'monthly' ? 99 : 990,
      features: ['Up to 600 Mbps', 'Unlimited Data', 'Advanced Security']
    },
    {
      id: 4,
      name: 'Gig',
      price: billingCycle === 'monthly' ? 119 : 1190,
      features: ['Up to 1 Gbps', 'Unlimited Data', 'Premium Support']
    },
  ];

  const selectedPlan = plansData.find(p => p.id === selectedId);

  const handleConfirm = async () => {
    try {
      await fetch('/api/submit-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan.name,
          price: selectedPlan.price,
          cycle: billingCycle,
        })
      });
      alert(`You selected ${selectedPlan.name}!`);
      setShowModal(false);
    } catch (error) {
      alert('Submission failed.');
    }
  };

  return (
    <div className="py-16 bg-gray-950 text-white">
      <style>{`
        @keyframes modalIn {
          0% { transform: scale(0.95); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-modalIn {
          animation: modalIn 0.3s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl font-bold">Choose Your Plan</h2>
        <p className="mt-2 text-gray-400">Flexible packages to suit your home’s needs.</p>
        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={() => setBillingCycle('monthly')}
            className={`px-4 py-2 rounded font-medium ${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle('yearly')}
            className={`px-4 py-2 rounded font-medium ${billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Yearly
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {plansData.map(plan => (
          <div
            key={plan.id}
            onClick={() => {
              setSelectedId(plan.id);
              setShowModal(true);
            }}
            className={`cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${plan.id === selectedId ? 'border-green-500 shadow-xl' : 'border-gray-700'}`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-extrabold text-green-500 mb-4">
              ${plan.price}<span className="text-base font-medium text-white">/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
            </p>
            <ul className="text-sm space-y-1 text-gray-300 mb-4">
              {plan.features.map((f, i) => (
                <li key={i} className="flex items-center">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
                  {f}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-semibold transition ${plan.id === selectedId ? 'bg-green-600 text-white' : 'bg-gray-700 text-gray-200 hover:bg-green-500 hover:text-white'}`}
            >
              {plan.id === selectedId ? 'Selected' : 'Choose Plan'}
            </button>

            {plan.id === selectedId && (
              <div className="mt-4 text-xs text-gray-400">
                ✅ Free modem & installation<br />
                📞 24/7 customer support<br />
                🔐 Secure connection & no throttling
              </div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <PlanModal
          plan={selectedPlan}
          billingCycle={billingCycle}
          onClose={() => setShowModal(false)}
          onConfirm={handleConfirm}
        />
      )}
    </div>
  );
}
