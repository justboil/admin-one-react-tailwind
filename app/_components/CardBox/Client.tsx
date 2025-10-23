import { mdiTrendingDown, mdiTrendingNeutral, mdiTrendingUp } from "@mdi/js";
import React from "react";
import { Client } from "../../_interfaces";
import CardBox from ".";
import PillTag from "../PillTag";
import UserAvatar from "../../dashboard/_components/UserAvatar";

type Props = {
  client: Client;
};

const CardBoxClient = (props: Props) => {
  const pillColor = () => {
    if (props.client.progress >= 60) {
      return "success";
    }
    if (props.client.progress >= 40) {
      return "warning";
    }

    return "danger";
  };

  const pillIcon = {
    success: mdiTrendingUp,
    warning: mdiTrendingNeutral,
    danger: mdiTrendingDown,
  }[pillColor()];

  return (
    <CardBox className="mb-6 last:mb-0">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="mb-6 flex flex-col items-center justify-start md:mb-0 md:flex-row">
          <UserAvatar className="mb-6 h-12 w-12 md:mr-6 md:mb-0" username={props.client.name} />
          <div className="overflow-hidden text-center md:text-left">
            <h4 className="text-xl text-ellipsis">{props.client.name}</h4>
            <p className="text-gray-500 dark:text-slate-400">
              {props.client.created} @ {props.client.login}
            </p>
          </div>
        </div>

        <PillTag color={pillColor()} icon={pillIcon} label={`${props.client.progress}%`} />
      </div>
    </CardBox>
  );
};

export default CardBoxClient;
