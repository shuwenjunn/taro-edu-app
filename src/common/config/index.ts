interface Server {
  [key: string]: {
    flag: string;
    url: string;
  };
}

export const serverMap: Server = {
  "file": {
    flag: "agent-pc",
    url: "http://education.bq.com/interface/",
  },
  "crm-mini": {
    flag: "agent-pc",
    url: "http://education.bq.com/interface/",
  },
};
