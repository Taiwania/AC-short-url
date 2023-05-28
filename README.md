# 短網址產生器

## 專案簡介
本專案網站可以將使用者輸入的過長網址，轉成短網址。

## 網站畫面

## 使用技術
1.  Express 4.18.2
2.  Express-Handlebars 7.0.7
3.  Mongoose 7.1.1

## 安裝流程
1.  打開 Terminal，cd 至預定存放本專案的目錄資料夾，執行 clone 程序：
   
    ```git clone https://github.com/Taiwania/AC-restaurant-list```

2.  切換到專案資料夾並安裝 npm：
    
    ```
    cd AC-restaurant-list
    npm install
    ```

3.  使用 MongoDB Atlas，在自己的資料庫內建立一個「restaurant」資料庫，並將自己的連線連結存成「.env」檔案放到專案目錄資料夾。

4.  執行以下指令，匯入本專案的種子資料到 MongoDB 資料庫：

    ```npm run seed```

    看到以下訊息代表資料已經匯入 MongoDB：

    ```The data of restaurants is imported.```

5.  最後執行以下指令啟動網站：

    ```npm run dev```

    看到以下指令代表網站載入完成，可以使用瀏覽器打開 http://localhost:3000 即可進入網站。

    ```The website http://localhost:3000 is online.```

## 開發人員
Taiwania