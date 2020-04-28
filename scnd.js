    var arr=new Array();
    var count=0;
  
    //GENERATE RANDOM ARRAY//
    function generate(){
        count=0;
        arr=[0];
        for(var i=1;i<=80;i++){
            var t=Math.floor((Math.random()*1000)+5);
            arr.push(t);
            document.getElementById(i).innerHTML=".";
            t=t+"px";
            document.getElementById(i).style.width=t;
            document.getElementById(i).style.height="4.5px";
            document.getElementById(i).style.backgroundColor="cyan";
            document.getElementById(i).style.margin="2px";
            document.getElementById(i).style.fontSize="xx-small"
            document.getElementById(i).style.borderRadius="50px";
        }
    }
//GENERATE RANDOM ARRAY END//

    
//BUBBLE SORT//
    function sort(){
        var temp=0;
        var t,l;
        for(var j=0;j<80;j++){
            for(var k=0;k<80-j;k++){
                if(arr[k]>arr[k+1]){
                    var temp;
                        temp=arr[k];
                        arr[k]=arr[k+1];
                        arr[k+1]=temp;
                       t=arr[k+1]+"px";
                       l=arr[k]+"px";
                       task(k+1,k,t,l);
                }
            }
        }
        count=0;
    }
    function task(j,k,t,l){
      setTimeout(function (){
          document.getElementById(k).style.backgroundColor="green";
          document.getElementById(j).style.width=t;
          document.getElementById(k).style.width=l; 
        }, 20*count);
      count++;           
  }
  //BUBBLE SORT END//


    //SELECTION SORT//
    function selectionsort(){
        var t,l;
       for(var i=0;i<=79;i++){
         var mini=i;
         for(var j=i+1;j<=80;j++){
           if(arr[j]<arr[mini]) 
                mini =j;
         }
         var temp=arr[i];
         arr[i]=arr[mini];
         arr[mini]=temp;
         t=arr[i]+"px";
         l=arr[mini]+"px";
         task1(i,mini,t,l);
       }
       count=0;
      }
      function task1(i,mini,t,l){
        setTimeout(function(){
          document.getElementById(i).style.width=t;
          document.getElementById(mini).style.width=l;
          document.getElementById(i).style.backgroundColor="green";
          document.getElementById(mini).style.backgroundColor="green";
        },200*count);
        count++;
      }//SELECTION SORT END//

    //QUICK SORT//
    function partition ( low, high) 
    { 
        var pivot = arr[high]; 
        var i = (low - 1);
      
        for (var j = low; j <= high- 1; j++) 
        { 
            if (arr[j] < pivot) 
            { 
                i++; 
                var t,k;
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
                t=arr[i]+"px";
                k=arr[j]+"px";
                task3(i,j,t,k);
            } 

        } 
                var t1,k1;
                var temp1=arr[i+1];
                arr[i+1]=arr[high];
                arr[high]=temp1; 
                t1=arr[i+1]+"px";
                k1=arr[high]+"px";
               // document.getElementById(i+1).style.width=t1;
                //document.getElementById(high).style.width=k1;
                task3(i+1,high,t1,k1)
                return (i + 1); 
    }
    function quickSort( low, high) 
    { 
        if (low < high) 
        { 
            var pi = partition( low, high);
            quickSort( low, pi - 1);
            quickSort( pi + 1, high);
        } 
    }
    
    function task3(i,j,t,k){
      setTimeout(function(){
        document.getElementById(i).style.width=t;
        document.getElementById(j).style.width=k;
        document.getElementById(i).style.backgroundColor="green";
      },20*count);
      count++;

    }
    function qs(){
      quickSort(0,arr.length-1);
    }
    //QUICK SORT END//

    //MERGE SORT//
    function MergeSort(array) {
      if (array.length <= 1) return array;
      const TempArray = array.slice();
      mergeSortHelper(array, 0, array.length - 1, TempArray);
      return ;
    }
    function mergeSortHelper(
      mainArray,
      startIdx,
      endIdx,
      TempArray,
    ) {
      if (startIdx === endIdx) return;
      const middleIdx = Math.floor((startIdx + endIdx) / 2);
      mergeSortHelper(TempArray, startIdx, middleIdx, mainArray);
      mergeSortHelper(TempArray, middleIdx + 1, endIdx, mainArray);
      doMerge(mainArray, startIdx, middleIdx, endIdx, TempArray);
    }
    
    function doMerge(
      mainArray,
      startIdx,
      middleIdx,
      endIdx,
      TempArray,
    ) {
      let k = startIdx;
      let i = startIdx;
      let j = middleIdx + 1;
      while (i <= middleIdx && j <= endIdx) {
        if (TempArray[i] <= TempArray[j]) {
          mainArray[k++] = TempArray[i++];
        } else {
          mainArray[k++] = TempArray[j++];
        }
      }
      while (i <= middleIdx) {
        mainArray[k++] = TempArray[i++];
      }
      while (j <= endIdx) {
        mainArray[k++] = TempArray[j++];
      }
      for(var i1=startIdx;i1<endIdx+1;i1++){
        var t=mainArray[i1]+"px";
        animate(i1,t);
      }
    }
    function mgsrt(){
      arr1=arr;
      MergeSort(arr1);
    }
    function animate(i,t){
      setTimeout(function(){
        document.getElementById(i).style.width=t;
      },20*count);
      count++;
    }
      //MERGE SORT END//
