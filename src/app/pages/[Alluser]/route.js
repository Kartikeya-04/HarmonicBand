//dynamic Route
import { connectDB } from '../../../DB/db';
import { NextResponse } from 'next/server';
import { User } from '../../../models/user';
import { v4 as uuidv4 } from 'uuid';

connectDB();
export async function POST(request) {
  const all = await request.json();
  var newUser = {};

  // if ('Feedback' in all) {
  //   newUser.Feedback = all.Feedback;
  //   if ('UserName' in all) {
  //     try {
  //       const user = new User({
  //         UserName: all.UserName,
  //         Email: all.Email,
  //         Feedback: all.Feedback,
  //       });
  //       const saved = user.save();
  //       console.log('saved third party');
  //     } catch (error) {
  //       console.log('error at 3 party', error);
  //       return NextResponse.json({
  //         Error: 'Error in saving the Data',
  //       });
  //     }
  //     var resp = NextResponse.json({
  //       saved,
  //       message: 'Saved through third Party !',
  //       status: 201,
  //     });

  //     return resp;
  //   }
  //   let user = await User.findOneAndUpdate(
  //     { UserId: all.UserId },
  //     { Feedback: newUser.Feedback },
  //     { new: true }
  //   ).exec();
  //   console.log('feedback is saved');
  //   var resp = NextResponse.json({
  //     user,
  //     message: 'Feedback is updated and saved !',
  //     status: 201,
  //   });
  //   return resp;
  // }

  if ('Feedback' in all && 'UserName' in all) {
    console.log(
      'check1',
      all.UserName,
      all.UserId,
      all.Password,
      all.Feedback,
      all.Email
    );
    newUser.Feedback = all.Feedback;
    try {
      const user = new User({
        UserId: 0,
        UserName: all.UserName,
        Password: 'd',
        Email: all.Email,
        Feedback: all.Feedback,
      });
      const saved = await user.save();
      console.log('saved third party');
      var resp = NextResponse.json({
        saved,
        message: 'Saved through third Party !',
        status: 201,
      });
      return resp;
    } catch (error) {
      console.log('error at 3 party', error);
      var errRes = NextResponse.json({
        message: 'error while saving 3rd auth',
        errored: error,
      });
      return errRes;
    }
  } else if ('Feedback' in all) {
    console.log('new feedback', all.Feedback);
    console.log(all.Email);
    let user = await User.findOneAndUpdate(
      { Email: all.Email },
      { Feedback: all.Feedback },
      { new: true }
    ).exec();
    console.log('feedback is saved');
    var resp = NextResponse.json({
      user,
      message: 'Feedback is updated and saved !',
      status: 201,
    });
    return resp;
  }

  if (all.UserId === '' || all.UserName === '' || all.Password === '') {
    return NextResponse.json({
      Error: 'Error in saving the Data',
    });
  }
  if (!('Feedback' in all)) {
    var CheckId = await User.findOne({ UserId: all.UserId });
    if (CheckId) {
      return NextResponse.json({
        User: 'User Already Exists !!!',
      });
    }
  }
  let newUserN = {};
  newUserN = await new User({
    UserId: all.UserId,
    UserName: all.UserName,
    Password: all.Password,
    Email: all.Email,
    // Feedback: all.Feedback,
  });

  try {
    const created = await newUserN.save();

    var resp = NextResponse.json({
      created,
      message: 'DATA IS SAVED !',
      status: 201,
    });

    return resp;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      UncaughtError: 'Error',
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
export async function DELETE(request) {
  var b = await params.Alluser;
  var all = request.json();
  // b = JSON.stringify(b);
  console.log(b);
  var Deluser = await User.deleteOne({ Feedback: all.Feedback });
  console.log('User is deleted !');

  var user = await User.deleteOne({ UserName: new RegExp(b, 'i') });
  return NextResponse.json({
    data: user,
    status: 200,
    message: 'user can be seen',
  });
}
