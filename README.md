# 短網址產生器

## 專案簡介
本專案網站可以將使用者輸入的過長網址，轉成短網址。

## 網站畫面

## 使用技術
1.  Node.js version 19.3.0
2.  Express version 4.18.2
3.  Express-Handlebars version 7.0.7
4.  Mongoose version 7.1.1
5.  Dotenv version 16.0.3

## 安裝流程
### 本地電腦執行
1.  打開終端機，cd 移動到預定放置本專案的資料夾，執行以下指令以複製本專案：
   
    ```
    git clone https://github.com/Taiwania/AC-short-url
    ```

2.  在該專案資料夾中，以終端機方式執行安裝 npm：
    
    ```
    npm install
    ```

3.  安裝完成後，請建立「.env」檔案，依照以下格式設定連到您自己 MongoDB 的連結：

    ```
    MONGODB_URI=mongodb+srv://<您的 MongoDB 帳號>:<您的 MongoDB 密碼>@xxx.xxx.xxx.net/short-url?retryWrites=true&w=majority
    ```

4.  執行以下指令，匯入本專案的種子資料到 MongoDB 資料庫：

    ```npm run seed```

    看到以下訊息代表資料已經匯入 MongoDB：

    ```The seeder is imported.```

5.  最後執行以下指令啟動網站：

    ```npm run dev```

    看到以下指令代表網站載入完成，可以使用瀏覽器打開 http://localhost:3310 即可進入網站。

    ```The website http://localhost:3310 is online.```

### Heroku 執行
1.  註冊、設定 Heroku 並安裝完 Heroku CLI。

2.  依照「本地電腦執行」章節第 1 至 2 點完成複製專案及安裝 npm。

3.  登入並初始化 Heroku 專案：

    ```
    heroku login
    heroku create
    ```

4.  在 Heroku 網站的專案設定頁面，於 Config Vars 點選 Reveal Config Vars，設定以下變數：

    ```
    MONGODB_URI: 請參考「本地電腦執行」第 3 點內的連結
    HEROKU: TRUE
    HEROKU_URL: 執行本專案的專屬網站連結，請去除網址最後的「/」
    ```

5.  在專案資料夾執行終端機指令，將本專案推送到 Heroku：

    ```
    git push heroku main
    ```

6.  在 Heroku 生成種子資料：

    ```
    heroku run npm run seed -a -<自己的 Heroku 專案名稱>
    ```

    完成後即可使用 Heroku 的網站連結操作本網站。

## 開發人員
Taiwania