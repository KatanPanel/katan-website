module.exports = {
  docs: [
    {
      type: "category",
      label: "About",
      items: [
        {
          type: "autogenerated",
          dirName: "about",
        },
      ],
    },
    {
      type: "category",
      label: "Installation",
      items: [
        {
          type: "autogenerated",
          dirName: "installation",
        },
      ],
    },
    {
      type: "category",
      label: "Katan CLI",
      items: [
        {
          type: "category",
          label: "Overview",
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "cli/overview",
            },
          ],
        },
        {
          type: "category",
          label: "Install and run",
          items: [
            {
              type: "autogenerated",
              dirName: "cli/install-and-run",
            },
          ],
        },
        "cli/update",
      ],
    },
    {
      type: "category",
      label: "Katan Web UI",
      items: [
        "web-ui/introduction"
      ],
    },
  ],
  reference: ["reference/overview"],
};
