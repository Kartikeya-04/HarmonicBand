//dynamic Route
import { connectDB } from '../../../DB/db';
import { NextResponse } from 'next/server';
import { User } from '../../../models/user';
console.log('try1');
connectDB();
console.log('try2');

export async function POST(request) {
  const all = await request.json();
  console.log(all);
  console.log(all.UserName, all.Password, all.Email);

  const newUser = await new User({
    UserName: all.UserName,
    Password: all.Password,
    Email: all.Email,
  });
  console.log('try3');

  try {
    const created = await newUser.save();

    console.log('try4');

    var resp = NextResponse.json({
      created,
      message: 'dynamic get method',
      status: 201,
    });
    console.log('try5');

    return resp;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      Error: 'while saving',
    });
  }
}

export async function GET(request, { params }) {
  var b = await params.Alluser;
  // b = JSON.stringify(b);
  console.log(b);
  var user = await User.findOne({ UserName: new RegExp(b, 'i') });
  return NextResponse.json({
    data: user,
    status: 200,
    message: 'user can be seen',
  });
}
export async function DELETE(request, { params }) {
  var b = await params.Alluser;
  // b = JSON.stringify(b);
  console.log(b);
  var user = await User.deleteOne({ UserName: new RegExp(b, 'i') });
  return NextResponse.json({
    data: user,
    status: 200,
    message: 'user can be seen',
  });
}
