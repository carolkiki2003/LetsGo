from flask import Flask,render_template,request
app = Flask(__name__)
@app.route("/",methods=['POST','GET'])
def index():
  if request.method =='POST':
    if request.values['send']=='送出':
      return render_template('index.html',name=request.values['user'])
  return render_template('index.html',name="")
# @app.route('/my-link/')
# def my_link():
#   with open("./data.json", "w") as f :
#     f.write('[{"地點":"宜蘭市","天氣":"晴時多雲"},{"地點":"臺北市","天氣":"一直下雨"}]\n')
#   return 'Click'
if __name__ == "__main__":
  app.run(host='0.0.0.0',port='5000',debug=True)