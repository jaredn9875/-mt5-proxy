export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log('Trade received:', req.body);
        return res.status(200).json({ success: true, message: 'Trade received' });
    }
    res.status(405).json({ message: 'Method not allowed' });
}
