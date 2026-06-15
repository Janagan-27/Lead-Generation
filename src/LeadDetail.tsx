type Props = {
  lead: any;
};

export default function LeadDetail({ lead }: Props) {
  if (!lead) return null;

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Lead Details
      </h2>

      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {lead.name}
        </p>

        <p>
          <strong>Company:</strong> {lead.company}
        </p>

        <p>
          <strong>Email:</strong> {lead.email}
        </p>

        <p>
          <strong>Phone:</strong> {lead.phone}
        </p>

        <p>
          <strong>Status:</strong> {lead.status}
        </p>

        <p>
          <strong>Source:</strong> {lead.source}
        </p>
         <p>
          <strong>Notes:</strong> {lead.notes}
        </p>
      </div>
    </div>
  );
}