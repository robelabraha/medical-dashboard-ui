import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        Medical Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Appointments</h2>
          <p>150 scheduled today</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Patients</h2>
          <p>12,000 records managed</p>
        </div>

        <div className="bg-white shadow rounded p-4">
          <h2 className="text-xl font-semibold">Reports</h2>
          <p>Workflow efficiency improved by 27%</p>
        </div>
      </div>
    </div>
  );
}
