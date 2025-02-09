let servers = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export const getAll = (req, res) => {
  res.status(200).json(servers);
};
