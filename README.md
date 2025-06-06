# Host Micro-frontend

This is the host micro-frontend (`host-mfe`) of my bachelor/graduation project.

An overview of the entire application, including more details on the backend, is already available [here](https://github.com/Haggag-dev/SeCBP.back-end?tab=readme-ov-file#bachelorgraduation-project).

## Instruction for Running the Frontend

_⚠ Please follow the order of the following instructions_ 

### Pre-requistes
- If you do not have the backend installed and running yet, please follow the instructions provided through [this link](https://github.com/Haggag-dev/SeCBP.back-end?tab=readme-ov-file#instructions-for-running-the-back-end) before proceeding further.
- [Install pnpm.](https://pnpm.io/installation)

### Order Micro-frontend

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.order-mfe
2. Then execute the following commands:
```sh
  cd SeCBP.order-mfe

  pnpm i

  pnpm build

  docker compose -p order-mfe up
```

### Product Micro-frontend

After completing the above step, navigate outside the `order-mfe` project directory and follow these steps:

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.product-mfe
2. Then execute the following commands:
```sh
  cd SeCBP.product-mfe

  pnpm i

  pnpm build

  docker compose -p product-mfe up
```

### Host Micro-frontend

After completing the above step, navigate outside the `host-mfe` project directory and follow these steps:

1. Clone this repository: https://github.com/Haggag-dev/SeCBP.host-mfe
2. Then execute the following commands:
```sh
  cd SeCBP.host-mfe

  pnpm i

  pnpm build

  docker compose -p host-mfe up
```

_Finally, browse to http://localhost:5001/products_

   
