import { Channel, ChannelAdmin, Category, Board } from "../../models/index.js";

export default async (req, res) => {
  try {
    const nowuser = req.user;
    if (!nowuser) {
      throw new Error("not logged in");
<<<<<<< HEAD
<<<<<<< HEAD
    }
=======
    } // 글을 너무 오래써서 쓰다가 시간지나서 로그인 풀리는경우 나오는 코드
>>>>>>> 4090055 (feat:board complete)
=======
    }
>>>>>>> fe1a391 (status)

    const reqbody = req.body;
    const chname = reqbody.channel;
    const catename = reqbody.category;

    const reqcuery = req.query;
<<<<<<< HEAD
<<<<<<< HEAD
    const nowview = reqcuery.boardId;
=======
    // const nowview = reqcuery.boardId;
    const nowview = 1;
>>>>>>> 4090055 (feat:board complete)
=======
    const nowview = reqcuery.boardId;
<<<<<<< HEAD
    // const nowview = 1;
>>>>>>> 180d9a7 (feedback and admin)
=======
>>>>>>> fe1a391 (status)
    const channel = await Channel.findOne({
      where: { engTitle: chname },
      include: [{ model: ChannelAdmin }],
    });

    // 수정자 확인 코드
    const board = await Board.findOne({
      where: { id: nowview, userId: nowuser.id },
      include: {
        model: Category,
      },
    });
    const channeladmin = await ChannelAdmin.findAll({
      where: { channelId: channel.id, userId: nowuser.id },
    });
    if (!board || !channeladmin) {
      throw new Error("not match user");
    }
    //

    const category = await Category.findOne({
      where: { channelId: channel.id, engTitle: catename },
    });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 180d9a7 (feedback and admin)
    await board.update({
      ...reqbody,
      categoryId: category.id,
    });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7505de7 (mainpage)

    if (board.superNotice) {
      board.update({ notice: ture });
    }

    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
=======

    await Board.update(
      { ...reqbody, categoryId: category.id },
      {
        where: {
          id: nowview,
        },
      }
    );
=======
    // await Board.update(
    //   board,
    //   { ...reqbody, categoryId: category.id },
    //   {
    //     where: {
    //       id: nowview,
    //     },
    //   }
    // );
>>>>>>> 180d9a7 (feedback and admin)
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
>>>>>>> 4090055 (feat:board complete)
=======
    res.json({ result: "ok" });
  } catch (err) {
    console.error(err);
    if (err.message == "not logged in") {
      res.status(401);
    } else if (err.message == "not match user") {
      res.status(403);
    } else {
      res.status(419);
    }
>>>>>>> fe1a391 (status)
    res.json({ err: err.message });
  }
};
