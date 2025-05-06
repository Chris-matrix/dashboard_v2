import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // For demo purposes, we'll just check if the credentials match our demo account
    if (email === 'demo@example.com' && password === 'password') {
      return NextResponse.json({ 
        success: true, 
        message: 'Login successful',
        user: {
          id: '1',
          email: 'demo@example.com',
          name: 'Demo User'
        }
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'An error occurred during login' },
      { status: 500 }
    );
  }
}
