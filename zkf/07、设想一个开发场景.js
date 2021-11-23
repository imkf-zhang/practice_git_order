// 两个开发人员：zcg 和 zkf  。   都在master分支上进行开发

// 那么在zkf push代码之前可以这样

// 1、先git add .    git commit -m    git push  
// 然后再git pull 把远程代码更新到本地文件，因为远程代码，可能还有zcg开发的功能

// 2、先git add .    git commit -m   然后再git pull  更新本地的代码，
// 然后再git push 提交自己的代码。


// push 和 pull

function sayHello() {
  console.log("hello")
}
